import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <h1 className="App-title">Modern JavaScript Cheatsheet</h1>
        </header>


<h2 id="introduction">Introduction</h2>
<h3 id="motivation">Motivation</h3>
<p>This document is a cheatsheet for JavaScript you will frequently encounter in modern projects and most contemporary sample code.</p>
<p>This guide is not intended to teach you JavaScript from the ground up, but to help developers with basic knowledge who may struggle to get familiar with modern codebases (or let's say to learn React for instance) because of the JavaScript concepts used.</p>
<p>Besides, I will sometimes provide personal tips that may be debatable but will take care to mention that it's a personal recommendation when I do so.</p>
<blockquote>
<p><strong>Note:</strong> Most of the concepts introduced here are coming from a JavaScript language update (ES2015, often called ES6). You can find new features added by this update <a href="http://es6-features.org">here</a>; it's very well done.</p>
</blockquote>
<h3 id="complementary-resources">Complementary Resources</h3>
<p>When you struggle to understand a notion, I suggest you look for answers on the following resources:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/search?q=">MDN (Mozilla Developer Network)</a></li>
<li><a href="https://github.com/getify/You-Dont-Know-JS">You don't know JS (book)</a></li>
<li><a href="http://es6-features.org">ES6 Features with examples</a></li>
<li><a href="http://wesbos.com/category/es6/">WesBos blog (ES6)</a></li>
<li><a href="https://www.udacity.com/course/javascript-basics--ud804">Javascript Basics for Beginners</a> - a free Udacity course</li>
<li><a href="https://www.reddit.com/r/javascript/">Reddit (JavaScript)</a></li>
<li><a href="https://www.google.com/">Google</a> to find specific blog and resources</li>
<li><a href="https://stackoverflow.com/questions/tagged/javascript">StackOverflow</a></li>
</ul>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#modern-javascript-cheatsheet">Modern JavaScript cheatsheet</a></li>
<li><a href="#introduction">Introduction</a>
<ul>
<li><a href="#motivation">Motivation</a></li>
<li><a href="#complementary-resources">Complementary resources</a></li>
</ul></li>
<li><a href="#table-of-contents">Table of contents</a></li>
<li><a href="#notions">Notions</a>
<ul>
<li><a href="#variable-declaration-var-const-let">Variable declaration: var, const, let</a></li>
<li><a href="#short-explanation">Short explanation</a></li>
<li><a href="#sample-code">Sample code</a></li>
<li><a href="#detailed-explanation">Detailed explanation</a></li>
<li><a href="#external-resource">External resource</a></li>
<li><a href="#-arrow-function">Arrow function</a></li>
<li><a href="#sample-code-1">Sample code</a></li>
<li><a href="#detailed-explanation-1">Detailed explanation</a>
<ul>
<li><a href="#concision">Concision</a></li>
<li><a href="#this-reference"><em>this</em> reference</a></li>
</ul></li>
<li><a href="#useful-resources">Useful resources</a></li>
<li><a href="#function-default-parameter-value">Function default parameter value</a></li>
<li><a href="#external-resource-1">External resource</a></li>
<li><a href="#destructuring-objects-and-arrays">Destructuring objects and arrays</a></li>
<li><a href="#explanation-with-sample-code">Explanation with sample code</a></li>
<li><a href="#useful-resources-1">Useful resources</a></li>
<li><a href="#array-methods---map--filter--reduce">Array methods - map / filter / reduce</a></li>
<li><a href="#sample-code-2">Sample code</a></li>
<li><a href="#explanation">Explanation</a>
<ul>
<li><a href="#arrayprototypemap">Array.prototype.map()</a></li>
<li><a href="#arrayprototypefilter">Array.prototype.filter()</a></li>
<li><a href="#arrayprototypereduce">Array.prototype.reduce()</a></li>
</ul></li>
<li><a href="#external-resource-2">External Resource</a></li>
<li><a href="#spread-operator-">Spread operator &quot;...&quot;</a></li>
<li><a href="#sample-code-3">Sample code</a></li>
<li><a href="#explanation-1">Explanation</a>
<ul>
<li><a href="#in-iterables-like-arrays">In iterables (like arrays)</a></li>
<li><a href="#function-rest-parameter">Function rest parameter</a></li>
<li><a href="#object-properties-spreading">Object properties spreading</a></li>
</ul></li>
<li><a href="#external-resources">External resources</a></li>
<li><a href="#object-property-shorthand">Object property shorthand</a></li>
<li><a href="#explanation-2">Explanation</a></li>
<li><a href="#external-resources-1">External resources</a></li>
<li><a href="#promises">Promises</a></li>
<li><a href="#sample-code-4">Sample code</a></li>
<li><a href="#explanation-3">Explanation</a>
<ul>
<li><a href="#create-the-promise">Create the promise</a></li>
<li><a href="#promise-handlers-usage">Promise handlers usage</a></li>
</ul></li>
<li><a href="#external-resources-2">External Resources</a></li>
<li><a href="#template-literals">Template literals</a></li>
<li><a href="#sample-code-5">Sample code</a></li>
<li><a href="#external-resources-3">External resources</a></li>
<li><a href="#tagged-template-literals">Tagged Template Literals</a></li>
<li><a href="#external-resources-4">External resources</a></li>
<li><a href="#imports--exports">Imports / Exports</a></li>
<li><a href="#explanation-with-sample-code-1">Explanation with sample code</a>
<ul>
<li><a href="#named-exports">Named exports</a></li>
<li><a href="#default-import--export">Default import / export</a></li>
</ul></li>
<li><a href="#external-resources-5">External resources</a></li>
<li><a href="#-javascript-this">JavaScript <em>this</em></a></li>
<li><a href="#external-resources-6">External resources</a></li>
<li><a href="#class">Class</a></li>
<li><a href="#samples">Samples</a></li>
<li><a href="#external-resources-7">External resources</a></li>
<li><a href="#extends-and-super-keywords">Extends and super keywords</a></li>
<li><a href="#sample-code-6">Sample Code</a></li>
<li><a href="#external-resources-8">External Resources</a></li>
<li><a href="#async-await">Async Await</a></li>
<li><a href="#sample-code-7">Sample code</a></li>
<li><a href="#explanation-with-sample-code-2">Explanation with sample code</a></li>
<li><a href="#error-handling">Error handling</a></li>
<li><a href="#external-resources-9">External resources</a></li>
<li><a href="#truthy--falsy">Truthy / Falsy</a></li>
<li><a href="#external-resources-10">External resources</a></li>
<li><a href="#anamorphisms-and-catamorphisms">Anamorphisms / Catamporphisms</a></li>
<li><a href="#anamorphisms">Anamorphisms</a></li>
<li><a href="#catamorphisms">Catamorphisms</a></li>
<li><a href="#external-resources-11">External resources</a></li>
<li><a href="#generators">Generators</a></li>
<li><a href="#external-resources-12">External resources</a></li>
<li><a href="#static-methods">Static Methods</a></li>
<li><a href="#short-explanation-1">Short Explanation</a></li>
<li><a href="#sample-code-8">Sample Code</a></li>
<li><a href="#detailed-explanation-2">Detailed Explanation</a>
<ul>
<li><a href="#calling-other-static-methods-from-a-static-method">Calling other static methods from a static method</a></li>
<li><a href="#calling-static-methods-from-non-static-methods">Calling static methods from non-static methods</a></li>
</ul></li>
<li><a href="#external-resources-13">External resources</a></li>
</ul></li>
<li><a href="#glossary">Glossary</a>
<ul>
<li><a href="#-scope">Scope</a></li>
<li><a href="#-variable-mutation">Variable mutation</a></li>
</ul></li>
</ul>
<h2 id="notions">Notions</h2>
<h3 id="variable-declaration-var-const-let">Variable declaration: var, const, let</h3>
<p>In JavaScript, there are three keywords available to declare a variable, and each has its differences. Those are <code>var</code>, <code>let</code> and <code>const</code>.</p>
<h4 id="short-explanation">Short explanation</h4>
<p>Variables declared with <code>const</code> keyword can't be reassigned, while <code>let</code> and <code>var</code> can.</p>
<p>I recommend always declaring your variables with <code>const</code> by default, and with <code>let</code> if you need to <em>mutate</em> it or reassign it later.</p>
<table>
  <tbody>
  <tr>
    <th></th>
    <th>
Scope
</th>
    <th>
Reassignable
</th>
    <th>
Mutable
</th>
   <th>
<a href="#tdz_sample">Temporal Dead Zone</a>
</th>
  </tr>
  <tr>
    <th>
const
</th>
    <td>
Block
</td>
    <td>
No
</td>
    <td>
<a href="#const_mutable_sample">Yes</a>
</td>
    <td>
Yes
</td>
  </tr>
  <tr>
    <th>
let
</th>
    <td>
Block
</td>
    <td>
Yes
</td>
    <td>
Yes
</td>
    <td>
Yes
</td>
  </tr>
   <tr>
    <th>
var
</th>
    <td>
Function
</td>
    <td>
Yes
</td>
    <td>
Yes
</td>
    <td>
No
</td>
  </tr>
  </tbody>
</table>

<h4 id="sample-code">Sample code</h4>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">const</span> person = <span class="st">&quot;Nick&quot;</span>;
person = <span class="st">&quot;John&quot;</span> <span class="co"> /  Will raise an error, person can&#39;t be reassigned</span></code></pre>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">let</span> person = <span class="st">&quot;Nick&quot;</span>;
person = <span class="st">&quot;John&quot;</span>;
<span class="ot">console</span>.<span class="fu">log</span>(person) <span class="co"> &quot;John&quot;, reassignment is allowed with let</span></code></pre>
<h4 id="detailed-explanation">Detailed explanation</h4>
<p>The <a href="#scope_def"><em>scope</em></a> of a variable roughly means &quot;where is this variable available in the code&quot;.</p>
<h5 id="var">var</h5>
<p><code>var</code> declared variables are <em>function scoped</em>, meaning that when a variable is created in a function, everything in that function can access that variable. Besides, a <em>function scoped</em> variable created in a function can't be accessed outside this function.</p>
<p>I recommend you to picture it as if an <em>X scoped</em> variable meant that this variable was a property of X.</p>

      </div>
    );
  }
}

export default App;
