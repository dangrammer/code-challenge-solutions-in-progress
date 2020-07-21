# tree needs to be constructed first
# if STDIN = 3 5 2 1 4 6 7
# tree is:
#         (3)              root
#         / \              |
#        /   \             |
#       /     \            |
#      /       \           |
#    (2)       (5)         depth 1
#    /         / \         | 
#   /         /   \        |
# (1)       (4)   (6)      depth 2
#                   \      |
#                    \     |
#                    (7)   depth 3
# then STDOUT = 3

def height(root):
  if root is None:
    return -1
  else:
    left_height = height(root.left)
    right_height = height(root.right)

    if left_height > right_height:
      return left_height + 1
    else: 
      return right_height + 1