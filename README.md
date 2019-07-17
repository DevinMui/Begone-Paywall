# Begone Paywall

Begone Paywall is exactly what the name suggests: a paywall bypasser. It bypasses the paywalls of certain websites.

### How it works

All paywalls operate using `localStorage`. Every time you read an article, the website stores the article in their `localStorage`. For the majority of the time, you could simply use incognito mode to access the article. However, I noticed that some sites started adding in an incognito blocker which is super annoying and requires a user to manually clear `localStorage`. This extension automates that process.

A background script listens to tab changes and executes a simple content script when the hostname is equivalent to one of the hostnames listed.

### What's next

Currently, Begone Paywall is using a `const` array to store a list of websites with paywalls. In the future, I plan to add user settings to expand the default list.

### License

MIT License

Copyright (c) 2019 Devin Mui

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
