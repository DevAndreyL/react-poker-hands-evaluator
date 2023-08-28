# How to set up application.
You need that 80 port of your 127.0.0.1 must be free, it's used by default in Golang application, but you can changed it.
First, you need to go to Golang application, download and set up the application. Documentation will be provided inside Golang app.
You can download it from this [link](https://github.com/DevAndreyL/go-poker-hands-evaluator).
Then you need to run `npm install` command inside the project directory, and after this `npm start`. Then you will be
redirected to the application in your default browser.

# Useful information
React application works only with three hands, but Golang application could evaluate any count for hands.
*Be careful, there is no validation for input, so you need to input exactly 5 cards with suits in uppercase format and separated by coma.*
Example: __TS,JS,QS,KS,AS__

After evaluation, you will see the result with detailed info and the winner. But you would not see a winner hand if you put the same input.
