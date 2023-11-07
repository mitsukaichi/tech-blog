# 14 Model-View-Controller (MVC): Tech Blog

## About this project

This project was done as part of the assignments in the UC Berkeley full stuck web developer coding bootcamp. In this assignment, the students are tasked to build a CMS-style blog site that meets the following requirements from scratch:

- User can view all the posts alredy made
- Can sign up or sign in and log out
- Signed in user can leave comment
- Signed in user can make a new post, update or delete existing their own post
- Session expires after a certain amount of time and user needs to sign in again

## Use

- This app is deployed and available at: https://mituskaichi-tech-blog-ebe1bd585964.herokuapp.com/
- [Screenshot](https://github.com/mitsukaichi/note-taker/assets/45612744/cbfc2b29-4f11-46f8-9258-9e23f697cd97)

## Resources referred to

- [HTML form element - W3 Schools](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit)
- [TypeError: Router.use() requires middleware function but got a Object](https://stackoverflow.com/questions/27465850/typeerror-router-use-requires-middleware-function-but-got-a-object)
- [Window location.reload()](https://www.w3schools.com/jsref/met_loc_reload.asp)
- [Text after space character cut off in input text field](https://stackoverflow.com/questions/54799469/text-after-space-character-cut-off-in-input-text-field-when-reloading-php-script)
- [HTML <textarea> Tag](https://www.w3schools.com/tags/tag_textarea.asp)

## Things I learnt from this challenge

- How to add the user_id to the session data on the server side to change the content to show on the page depending on the user
- The importance of desigining the controll for all the user scenarios. For example, you need to cover the scenario where the API request doesn't contain all the data required to query the server or the response from the server doesn't contain the data needed to show to the user, otherwise the page is not properly rendered in some cases
- The importance of wireframing the entier site design before start writing the HTML class name and styles, otherwise you won't know which one is going to be reused for other pages

## License

MIT License

Copyright (c) [2023] [Minami Mukai]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.