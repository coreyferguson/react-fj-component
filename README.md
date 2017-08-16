**react-fj-component** is a reusable component built in react and bundled through webpack. 

Clone the repository from github through git clone. Then run webpack, it will produce two files in the **build** folder:
 
1. index.js, is a commonjs2 file which can be consumed through node by doing `npm install react-fj-component`.
(An example of consumer component can be found here: https://github.com/digitaleye/react-fj-component-consumer)
OR
It can be consumed doing `npm link`. 
	
2. indexAMD.js, is a AMD file which can be consumed in the browser by doing
`bower install  react-fj-component`. 
(An example of consumer component can be found here: https://github.com/digitaleye/react-fj-component-consumer)
OR 
It can be consumed by doing `bower link` `https://bower.io/docs/api/#link`

> react-fj-component has been published on npm and bower, so when **consuming** we can run `npm install react-fj-component` and `bower install react-fj-component` based on the requirement.


