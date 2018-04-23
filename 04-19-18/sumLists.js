/*
You have two numbers represented by a linked list, where each node containes a single
digit. The digits are stored in reverse order, such that the 1's digits is at the head
of the list. Write a function that adds the two numbers and returns the sum as a linked
list.

EXAMPLE:
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 295.
Output: 2 -> 1 -> 9. That is 912.

Follow Up
Suppose the digits are stored in the forward order. Repeat the above problem.

EXAMPLE:
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
Output: 9 -> 1 -> 2. That is 912.

Hints #7, #30, #71, #95, #109
*/

//assumption 
//1) list structure:
//  {
//   value: 7,
//   next: {
//     value: 3,
//     next: {
//       value: 4,
//       next: {
//         value: 1,
//         next: null
//       }
//     }
//   }
//  }
//2) value will be single digit


let list1 = {
  value: 7,
  next: {
    value: 3,
      next: {
        value: 1,
        next: null
      }
    }
 };

 let list2 = {
  value: 2,
  next: {
    value: 1,
      next: {
        value: 2,
        next: null
      }
    }
 };

let listUnpacker = (list) => {
  number = [];
  while (list.next !== null) {
    number.unshift(list.value);
    list = list.next;
  } 
  number.unshift(list.value);
  return Number(number.join(""));
};

let linkedListCreater = (numberStr) => {
  let list = {value: null, next:null};
  let numberArr = numberStr.split("");
  let current = list;
  while (current.next === null && numberArr.length > 0) {
      current.value = numberArr.pop();
      current.next = {value: null, next:null};
      current = current.next;
  }
  current.next = null;
  return list;
};

let linkedListSum = (list1, list2) => {
  let number1 = listUnpacker(list1);
  let number2 = listUnpacker(list2);
  let total = (number1 + number2).toString();
  console.log("total", total);
  return linkedListCreater(total);
};



linkedListSum(list1, list2);