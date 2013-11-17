# サーバーサイドでD3.jsを動かすサンプル

d3.jsのforce layoutのサンプルをサーバーサイドで動かしてみた.  
100ノード程度のレイアウトに数秒かかるデータファイル(sample.json)を使用.  
（速度自体はそんなにかわらず）

元ファイルはsample.html  

## 使い方

    $ npm install  
    $ npm start  

の後に, localhost:3000/graph にアクセス！  

## Dependencies
  node.js  

  d3  
  express  
  jade  

