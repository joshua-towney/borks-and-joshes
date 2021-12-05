# borks-and-joshes
A take on a classic, demonstrating the love between a boy and his dog

It's Tic-tac-toe but sexier

Select you avatar at the top of the screen (sorry player 2 but player 1 has a much cuter avatar). You can mix and match every go if you so desire. 

You can change your player names using the buttons at the top-right of the game. DOing so will also reset the scores. 

## Play my game here 

https://joshua-towney.github.io/borks-and-joshes/


### The Journey

When given the task of creating my take on tic-tac-toe, my mind immediately went to buttons as a way of disabling and area once it had been clicked. I set these up in a 3x3 grid and worked around that. I outlined a list of the biggest hurdles I thought I would face before starting this. The main one being "How does the computer know that a line has been formed?". I eventualy tackled this problem by setting up a toggle to go between player one and two, and comparing that toggle against 8 possible winning lines. for example:

(if button 1/2/3 are all disabled and they are all filled with text left by player one) > run the game over function.

I knew from the start I wanted as little GUI on screen as possible. rather then setting up full messages such as "Player one wins", "it's a draw" etc, I decided to ony have three words on the screen that could all be toggled to display what I want. Word 1 could toggle between PLAYER/NO. Word 2 between 1/2, and word 3 between TURN/WINS. With these toggles I can display a wide array of three word messages such as "player one wins", "player two turn", "no one wins". This is the feature I am the proudest of. 

### Obstacles

My biggest hurdle was the actual toggle. Originally when I toggled I changed the ID of the ONE/TWO toggle hich caused all sorts of head aches. I got around this by leaving the id as it was so I could always select i,  and also adding a toggleable class name to the word. 




