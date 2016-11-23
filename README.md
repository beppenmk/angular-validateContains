# angular-validateContains
Simple directive to validate if input value is in array. 

## Code Example
```javascript
(function () {
  "use strict";
  angular.module("app", ["syn-validateContains"]);
})();
....
....
....

  <input type="text" ng-model="vm.province" name="province"  required validate-contains="vm.listAvailableAree"/>

```
## Motivation
I need this for validate a datalist tag
```html
<input  type="text" 
        ng-model="vm.province" 
        name="province" 
        list="province" 
        required validate-contains="vm.listAvailableAree" />
<datalist id="province">
    <option value="{{area.code}}" ng-repeat="area in  vm.aree track by area.code">
        {{area.code}}-{{area.title}}
    </option>
</datalist>
```
