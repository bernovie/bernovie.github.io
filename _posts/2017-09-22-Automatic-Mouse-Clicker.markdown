---
layout: post
title: "How to Make an Automatic Mouse Clicker"
categories: ["tutorial", " blog", " mouse"]
date: 2018-01-2
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

I tried it but it didn't really work. The thing is that click can only click on UI elements of MacOSX Applications, but if you want to click in say a flash program running in a website you will have a hard time.

The next best thing that I found along my journey was [this blog post.](http://hints.macworld.com/article.php?story=2008051406323031) In it the author explains how he needed an automatic mouse clicker that could interact with videogame interface elements. This was just what I needed, since the Apple Script "click" function cannot interact with all UI elements. The solution was the following,

{% highlight C++%}
// File: 
// click.m
//
// Compile with: 
// gcc -o click click.m -framework ApplicationServices -framework Foundation
//
// Usage:
// ./click -x pixels -y pixels 
// At the given coordinates it will click and release.


#import <Foundation/Foundation.h>
#import <ApplicationServices/ApplicationServices.h>


int main(int argc, char *argv[]) {
  NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
  NSUserDefaults *args = [NSUserDefaults standardUserDefaults];


  // grabs command line arguments -x and -y
  //
  int x = [args integerForKey:@"x"];
  int y = [args integerForKey:@"y"];


  // The data structure CGPoint represents a point in a two-dimensional
  // coordinate system.  Here, X and Y distance from upper left, in pixels.
  //
  CGPoint pt;
  pt.x = x;
  pt.y = y;


  // This is where the magic happens.  See CGRemoteOperation.h for details.
  //
  // CGPostMouseEvent( CGPoint        mouseCursorPosition,
  //                   boolean_t      updateMouseCursorPosition,
  //                   CGButtonCount  buttonCount,
  //                   boolean_t      mouseButtonDown, ... )
  //
  // So, we feed coordinates to CGPostMouseEvent, put the mouse there,
  // then click and release.
  //
  CGPostMouseEvent( pt, 1, 1, 1 );
  CGPostMouseEvent( pt, 1, 1, 0 );


  [pool release];
  return 0;
}
{% endhighlight %} 

<p style="display: inline">This code would have to be saved in a file called <b style="color: green">"click.m"</b> and then compiled as</p>  
<b style="color: green">"gcc -o click click.m -framework ApplicationServices -framework Foundation"</b>
If there are no errors an executable named "click" should be produced. To call it, you should be in the same directory as the executable and you call it as such,
{% highlight bash %}
./click -x XCoordinate -y YCoordinate
{% endhighlight %}
<p style="color: #4F82AF">Note: XCoordinate and YCoordinate should be changed to the desired values.</p>
An automatic mouse clicker script can now be written pretty easily in Apple Script, all we have to do is to call the executable with the <b style="color: green">"do shell script"</b> command.

{% highlight applescript %}
do shell script "/Users/berny/Documents/workspace-dev/Apple_Scripts/click -x 500 -y 500"
{% endhighlight %}
<p style="color: #4F82AF">Note: <b>"Users/berny/Documents/workspace-dev/Apple_Scripts/click"</b> should be changed to the directory where the click executable is stored.</p>
You can use other Apple Script commands if for example you want to click an area of the screen every N seconds: 
{% highlight applescript %}
repeat (100) times
	do shell script "/Users/berny/Documents/workspace-dev/Apple_Scripts/click -x 500 -y 500"
	delay (6)
end repeat
{% endhighlight %}
This is how I was able to make a script that clicks a button in a flash program every 6 seconds. I hope you found this blog post useful, if you have questions or need further help you can contact me at <b style="color: #C98686">bernyoviedo@utexas.edu</b>
<!--<span style="color: #4F82AF">[I have been a little bit busy with finals coming up, but afterwards I will finish this post]</span>-->
