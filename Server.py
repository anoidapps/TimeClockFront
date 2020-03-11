from flask import Flask
from flask import request
from MultiplayerGame import MultiplayerGame
from ClassFile import Player
from ClassFile import Weapon
from ClassFile import Shield
from ClassFile import HealthPotion
import random

app = Flask(__name__)

cache = {}


@app.route("/")
def server_info():
    return "Python game server"


@app.route("/game-create")
def create_lobby():
    cache["game"] = MultiplayerGame()
    return "Game created."


@app.route("/game-status")
def get_lobby_status():
    game = cache["game"]
    if game.player1 == None:
        return "Waiting for player 1 to join."
    elif game.player2 == None:
        return "Waiting for player 2 to join."
    else:
        return "Waiting for game to start. " + game.player1.name + " vs. " + game.player2.name


@app.route("/game-join")
def join():
    playerName = request.args.get('name')
    game = cache["game"]
    if game.player1 == None:
        game.player1 = Player(name=playerName, max_health=50, max_mana=0)
        dull_sword = Weapon(name='DULL SWORD', min_damage=5, max_damage=10, damage_type='Slash', cost=0)
        rugged_bow = Weapon(name='RUGGED BOW', min_damage=6, max_damage=8, damage_type=' ', cost=0)
        game.player1.weapons.append(dull_sword)
        game.player1.weapons.append(rugged_bow)
        wooden_shield = Shield(name='WOODEN SHIELD', min_block=10, max_block=20, cost=0)
        game.player1.shields.append(wooden_shield)
        minor_health_potion = HealthPotion(name='MINOR HEALTH POTION', restore_health=12, cost=10)
        game.player1.inventory.append(minor_health_potion)
        cache["game"] = game
        return playerName + " joined game lobby."
    if game.player2 == None:
        game.player2 = Player(name=playerName, max_health=50, max_mana=0)
        dull_sword = Weapon(name='DULL SWORD', min_damage=5, max_damage=10, damage_type='Slash', cost=0)
        rugged_bow = Weapon(name='RUGGED BOW', min_damage=6, max_damage=8, damage_type=' ', cost=0)
        game.player2.weapons.append(dull_sword)
        game.player2.weapons.append(rugged_bow)
        wooden_shield = Shield(name='WOODEN SHIELD', min_block=10, max_block=20, cost=0)
        game.player2.shields.append(wooden_shield)
        minor_health_potion = HealthPotion(name='MINOR HEALTH POTION', restore_health=12, cost=10)
        game.player2.inventory.append(minor_health_potion)
        cache["game"] = game
        return playerName + " joined game lobby."
    return "Game is full. Try another time."


@app.route("/game-leave")
def leave():
    playerName = request.args.get('name')
    game = cache["game"]
    if game.player1.name == playerName:
        game.player1 = None
        cache["game"] = game
        return playerName + " left the game lobby."
    if game.player2.name == playerName:
        game.player2 = None
        cache["game"] = game
        return playerName + " left the game lobby."
    return "Leave game failed. Player not member of game."


@app.route("/game-start")
def start_game():
    game = cache["game"]
    if game.started == False:
        game.started = True
        game.turn = random.randint(1, 2)
        cache["game"] = game
        return "Player " + str(game.turn) + " goes first."
    else:
        return "Player " + str(game.turn) + " goes first."


@app.route("/do-action")
def do_action():
    action = request.args.get('action')
    playerName = request.args.get('name')
    game = cache["game"]
    msg = ""
    if playerName == game.player1.name:
        msg = game.player_action(game.player1, game.player2, action)
        game.turn = 2
    if playerName == game.player2.name:
        msg = game.player_action(game.player2, game.player1, action)
        game.turn = 1
    cache["game"] = game
    return msg


@app.route("/check-turn")
def check_turn():
    playerName = request.args.get('name')
    game = cache["game"]
    if playerName == game.player1.name and game.turn == 1:
        return "yes"
    elif playerName == game.player2.name and game.turn == 2:
        return "yes"
    else: 
        return "no"


@app.route("/match-status")
def match_status():
    game = cache["game"]
    msg = ""
    msg += game.player1.name + " has " + str(game.player1.health) + " health. "
    msg += game.player2.name + " has " + str(game.player2.health) + " health. "
    if game.player1.health < 1 or game.player2.health < 1:
        msg += "The match has ended."
    else:
        msg += "The match is still in progress."
    return msg


@app.route("/get-previous-player-action")
def get_previous_player_action():
    game = cache["game"]
    return game.lastMessage


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
