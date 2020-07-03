# https://leetcode.com/problems/is-graph-bipartite/
# needs to be reviewed

class Solution:

  def isBipartite(self, graph: List[List[int]]) -> bool:
      
    a = set()
    b = set()

    for neighbors, start in zip(graph, range(len(graph))):
      for end in neighbors:
          # each edge starts at 'start' and ends at 'end'
          
        if start in a:
          if end in a:
            return False
          b.add(end)

        elif start in b:
          if end in b:
            return False
          a.add(end)
          
        elif end in a:
          if start in a:
            return False
          b.add(start)

        elif end in b:
          if start in b:
            return False
          a.add(start)                
              
        else:
          a.add(start)
          b.add(end)
          
          print(f'a: {a}')
          print(f'b: {b}\n')

    return True