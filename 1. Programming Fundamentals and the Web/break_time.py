import webbrowser
import time

total_breaks = 3
break_count = 0

while(break_count < total_breaks):
	time.sleep(2*60*60)
	webbrowser.open("http://youtube.com")
	break_count = break_count + 1