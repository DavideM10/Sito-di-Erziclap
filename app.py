from flask import Flask, request, jsonify
import pyautogui as py
import pywhatkit as kit
import time
import random

app = Flask(__name__)

@app.route('/run-python', methods=['POST'])
def run_python():
    fabio = "+393397701251"
    degan = "+393312821650"
    passone = "+393760049643"
    id = "JX45yP9rzySFoIHNcl6EFq"
    count = 0

    msg = ["Ciao, questo è un messaggio automatico.",
           "Se hai ricevuto questo messaggio, significa che il mio script funziona correttamente.",
           "Se hai bisogno di aiuto, non esitare a contattarmi.",
           "Grazie!", 
           "Ciao, come stai?",
           "Spero che tu stia bene.",
           "Ti prego non bloccarmi :)",
           "Sei un grande!",
           "Sei il migliore!",
           "Sei un mito!",
           "Sei un genio!",
           ]

    kit.sendwhatmsg_instantly(fabio, random.choice(msg))

    while count <= 3:
        a = random.choice(msg)
        py.typewrite(a)
        py.press("enter")
        count += 1

    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)