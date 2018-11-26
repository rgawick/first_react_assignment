import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div>
      <div class="bluebar"><p><span class="first">HighonCoding</span>          <span class="second"><a href="index.html">Home</a></span>         <span class="third"><a href="categories.html">Categories</a></span></p>
      </div>
      <div class="second_bar"><div class="curse">Curse of the Current Reviews</div>
      <div class="smalltext"><p>When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependant on three important factors: price, screenshot and reviews.</p></div>
      </div>

      <div class="mid1">Hello WatchKit</div>
      <div class="mid2">Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.</div>
      <div class="mid3"><p>12 comments&nbsp;&nbsp;&nbsp;124 likes</p></div>

      <div class="mid1">Introduction to Swift</div>
      <div class="mid2">Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still ib development but it clearly reflects the intentions and the future direction. This article will revolve arround the basic concepts in the Swift language and how you can get started.</div>
      <div class="mid3"><p>15 comments&nbsp;&nbsp;&nbsp;45 likes</p></div>
      </div>
    )
  }

}

// exporting Greeting component so that it can be imported
// by other components
export default Header
