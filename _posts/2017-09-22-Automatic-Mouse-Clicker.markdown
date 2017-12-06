---
layout: post
title: "How to Make an Automatic Mouse Clicker"
categories: ["tutorial", " blog", " mouse"]
quantity: 3
---

The other day I was searching for tutorials on the internet on how to create
an automatic mouse clicker with Apple Script, but I just couldn't find anything that worked. Some websites said it was possible by telling process "X" to call the function click, like so:

{% highlight applescript%}
tell application "System Events"
          tell process "X"
                    click at {100, 200}
          end tell
end tell
{% endhighlight %} 

I tried it but it didn't really work. The thing is that click can only click on UI elements like tabs of the application.

<span style="color: #4F82AF">[I have been a little bit busy with finals coming up, but afterwards I will finish this post]</span>
