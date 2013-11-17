# coding: utf-8

# = generator.rb
# Author::Hiromasa IWAYAMA
#
# 100ノード程度のサンプル用グラフJSONの生成
#

$:.unshift File.expand_path("../", __FILE__)

require'awesome_print'
require'json'

n = 100 # ノード数
rate = 0.4 # リンクを張る確率

nodes = n.times.to_a
links = []
nodes.combination(2) do |i, j|
  if rand() <= rate
    # リンク生成
    links << [i, j]
  end 
end

json = {
  nodes: nodes.map{|n| {name: n.to_s, group: 1}}, 
  links: links.map{|l| {source: l[0], target: l[1], value:1}}
}

puts JSON.pretty_generate(json)
