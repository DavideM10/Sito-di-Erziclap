from flask import Flask, request, jsonify
import pywhatkit as kit
import random

app = Flask(__name__)

@app.route('/run-python', methods=['POST'])
def run_python():
    passone = "+393760049643"
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

    kit.sendwhatmsg_instantly(passone, random.choice(msg))

    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)