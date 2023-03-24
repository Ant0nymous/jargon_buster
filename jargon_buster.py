import os
from bs4 import BeautifulSoup

abbr = input("Enter the abbreviation: ")
desc = input("Enter the description: ")

# Load HTML file
html_file = "site/index.html"
with open(html_file, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

# Find the correct section to add the new item
section = soup.find("ul", {"id": abbr[0].upper()})
if not section:
    # If the section does not exist, create it
    section = soup.new_tag("ul", **{"id": abbr[0].upper(), "class": "terms-list"})
    soup.append(section)

# Create new list item
new_item = soup.new_tag("li")
new_h2 = soup.new_tag("h2")
new_h2.string = abbr.upper()
new_p = soup.new_tag("p")
new_p.string = desc
new_item.append(new_h2)
new_item.append(new_p)

soup.ul.append(new_item)
soup.ul.append("\n")

# Find the correct position to insert the new item
insert_before = None
for item in section.find_all("li"):
    if abbr.upper() < item.h2.string:
        insert_before = item
        break

# Insert new item in the correct position
if insert_before:
    insert_before.insert_before(new_item)
else:
    section.append(new_item)

# Save changes to HTML file
with open(html_file, "w", encoding="utf-8") as f:
    f.write(str(soup))

# Open HTML file in default web browser
os.system("start " + html_file)
