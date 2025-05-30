from flask import Flask, request, render_template 

app = Flask(__name__) # flask constructor

@app.route('/', methods =["POST"]) 
def here(): # action in html requires {{ url_for("here") }}
    if request.method == "POST":
       # assigning variables with html input names
       name = request.form.get("name") # name field
       username = request.form.get("username") # PRIMARY KEY
       password = request.form.get("password") # password field
       cp = request.form.get("cp") # confirm password field

       return "Fields: "+name+username+password+cp
    return render_template("registration.html")

if __name__=='__main__':
   app.run()