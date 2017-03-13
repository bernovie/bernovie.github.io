---
layout: post
title:  "Welcome to Jekyll!"
date:   2016-09-15 20:48:28 -0500
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Hi this is a test sentence in a post.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

{% highlight python%}
lim = int(raw_input())
nums = map(int, raw_input().split())

for i in range(len(nums)):
    for e in range(i+1, len(nums)):
        if nums[i] > nums[e]:
            print "NO"
            exit()

print "SI"
{% endhighlight %}

This is an example of jekyll C++ highlighting.
{% highlight C++ %}
#include <iostream>
#include <math.h>
using namespace std;

int main(){
    char opt = ' ';
    int grade = 0;
    int total = 0,cont = 0;
    do{
        cout<<"Enter grade: ";
        cin>>grade;
        total += grade;
        cont++;
        cout<<"Do you want enter another grade?<Y/N>";
        cin>>opt;
        opt = tolower(opt); 
    }while(opt != 'n');
    cout<<"The total average is: ";
    cout<<((double)total)/((double)cont)<<endl;
    cout<<cos(360)<<endl;
    cout<<pow(10,10)<<endl;
    cout<<hypot(3,4)<<endl;
    cout<<fmax(3,8)<<endl;
    cout<<isgreater(10.0f,5.0f)<<endl;
return 0;
}
{% endhighlight %}

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
