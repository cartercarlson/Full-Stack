import os
def rename_files():
	file_list = os.listdir(r"C:/Users/Carter Carlson/Documents/Udacity/Full Stack Nanodegree/Programming Fundamentals and the Web/Prank code")

	os.chdir(r"C:/Users/Carter Carlson/Documents/Udacity/Full Stack Nanodegree/Programming Fundamentals and the Web/Prank code")
	for file_name in file_list:
		os.rename(file_name, file_name.translate(None, "0123456789"))
rename_files()