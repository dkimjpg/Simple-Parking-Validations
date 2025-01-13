# About this app:
This is just a simple website I made to handle giving out parking validation codes. I don't intend to use it for any commercial purposes, 
it's just something I coded up in about half an hour during some off time during work. Boredom will do that to you.

Anyway, it's meant to address some of the most common requests at the front desk of an office's main lobby. It's still in development as 
of this writing (which would be 1/13/2025, and if I decide to update this further, I'll probably leave some updates near the bottom) and
I plan on improving it with a more modern but simplistic design as I work on this. If for some reason you decide to use this for your
own parking validation code system, you're putting a lot of sensitive employee data at risk. This is just a personal project, nothing
special.

# How parking validation code distribution works:
When an employee enters their name and alias information into the designated areas, a preexisting csv file with the parking validation codes 
will be checked to see what the next available code is and it will put that code along with the date and the employee's name and alias onto a csv file
that is intended to hold used parking validation codes. Then it will display that code on the website by redirecting the employee to the 
parking code webpage with their code on it. The important part about the parking codes is that they need to already be in the same folder as
this application, and when the codes run out, new codes need to be added. Plus, the csv file with all the used codes may also need to be updated
depending on specific usage.

For those of you who don't know what a csv file is, it's a basic spreadsheet file where columns are separated by commas, and rows are separated
line by line.

# Features
- Offers parking validation codes to employees
- Handles a few other potential requests that a front desk might get from employees and visitors

# To-Do
- Add functionality to the parking validation code distribution so employees can actually get a code instead of the placeholder text
  - Will need to write some JavaScript code for this, specifically some code to read from a csv file and write to a csv file
- Add functionality to check if there are no more available parking validation codes left
- Add a button to handle cost center codes for parking validation
- Improve the UI to look more modern instead of something from Windows 95
- Add a button that lets an employee get another code if it doesn't work
- Add a button that lets an employee correct the information that they entered
- Add some instructions for employees in case they have no idea how to do parking validation
- Add a mechanism that determines if it is before or after 12 pm to give out the correct type of validation code (6-10 hr or 2-6 hr codes)
