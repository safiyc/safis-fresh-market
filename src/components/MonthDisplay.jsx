import React from 'react';
import MonthData from './MonthData';

const availableProduce = [
  {
    month: 'January',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Turnips'
    ]
  },
  {
    month: 'February',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {
    month: 'March',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {
    month: 'April',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Asparagus',
      'Garlic',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {
    month: 'May',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Asparagus',
      'Cauliflower',
      'Garlic',
      'Lettuce',
      'Potatoes',
      'Radishes'
    ]
  },
  {
    month: 'June',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Blackberries',
      'Cherries',
      'Raspberries',
      'Strawberries',
      'Asparagus',
      'Broccoli',
      'Cauliflower',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Potatoes',
      'Radishes',
      'Squash'
    ]
  },
  {
    month: 'July',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Apricots',
      'Blackberries',
      'Blueberries',
      'Cherries',
      'Melons',
      'Nectarines',
      'Peaches',
      'Raspberries',
      'Strawberries',
      'Tomatoes',
      'Beets',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'August',
    selection: [
      'Apples',
      'Apricots',
      'Blackberries',
      'Blueberries',
      'Cherries',
      'Melons',
      'Nectarines',
      'Peaches',
      'Pears',
      'Plums',
      'Raspberries',
      'Rhubarb',
      'Strawberries',
      'Tomatoes',
      'Beets',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'September',
    selection: [
      'Apples',
      'Blueberries',
      'Grapes',
      'Melons',
      'Peaches',
      'Pears',
      'Plums',
      'Raspberries',
      'Tomatoes',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'October',
    selection: [
      'Apples',
      'Grapes',
      'Hazelnuts',
      'Melons',
      'Peaches',
      'Pears',
      'Tomatoes',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Pumpkins',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'November',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Broccoli',
      'Carrots',
      'Cauliflower',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'December',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Broccoli',
      'Carrots',
      'Cauliflower',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Turnips'
    ]
  }
];

function MonthDisplay() {
  return (
    <div>
      <style jsx>{`
        .produce-columns {
          columns: 3 auto;
          background-color: lightgreen;
          padding: 15px 5px;
          margin-top: -13px;
        }
        .item {
          background: linear-gradient(to right, rgba(255,255,0,1) 0%,rgba(125,185,232,0) 100%);
          margin: 0 auto 15px;
          padding-left: 10px;
        }
      `}</style>
      <h2>Our Produce Availability Throughout the Year</h2>
      {availableProduce.map((data, index) => {
        return (
          <div key={index}>
            <MonthData month={data.month} />
            <div className="produce-columns">
              {data.selection.map((el, index) => {
                return (
                  <p key={index} className="item">{el}</p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MonthDisplay;
