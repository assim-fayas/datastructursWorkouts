class Node{
    constructor(value){
    this.value=value
    this.left=null
    this.right=null
    }
}
class binarysearchtree{
    constructor(value){
    this.root=null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
        }else{
            this.insertnode(this.root,newNode)
        }
    }
    insertnode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertnode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertnode(root.right,newNode)
            }
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }
        else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null
            } if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
             root.value=this.min(root.right)
             root.right=this.deleteNode(root.right,root.value)
            }
           return root
        }
        search(root,value){
            
        }
    }


const bst=new binarysearchtree()
bst.insert(1)
bst.insert(3)
bst.insert(5)
bst.insert(6)
bst.insert(10)
bst.delete(1)
bst.inorder(bst.root)