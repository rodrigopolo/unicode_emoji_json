# Emoji JSON 

Emoji data from unicode.org to JSON file. 

## How to:
Download on GNU Linux:
```
wget http://www.unicode.org/Public/emoji/1.0/emoji-data.txt
```

Download on OS X:
```
curl -O http://www.unicode.org/Public/emoji/1.0/emoji-data.txt
```

Install dependencies:
```
npm install js-beautify
```

Run:
```
node unicode_json.js > outout.json
```

More info:  
http://www.unicode.org/reports/tr51/#Rights_to_Emoji_Images
http://www.unicode.org/Public/emoji/1.0/emoji-data.txt
http://www.unicode.org/versions/Unicode8.0.0/

## License

(The MIT License)

Copyright (c) by Rodrigo Polo http://RodrigoPolo.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.