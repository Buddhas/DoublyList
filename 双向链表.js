//双向链表的结构
function Node(value){
    this.value = value
    this.previous = null
    this.next = null
}

function DoublyList(){
    this.length = 0
    this.current = 0
    this.head = null
    this.tail = null
}

//双向链表初始化
DoublyList.prototype.add = function(value){
    var node = new Node(value)
    if(this.length === 0){
        this.head = node
        this.tail = node
        this.length++
    }else{
        this.tail.next = node
        node.previous = this.tail
        this.tail = node
        this.length++
    }
}

//双向链表从头遍历
DoublyList.prototype.traverseFromHead = function(node){
    if(node.next !== null){
        console.log(node.value)
        this.traverseFromHead(node.next)
    }else{
        console.log(node.value)
    }
}

//双向链表从尾部遍历
DoublyList.prototype.traverseFromTail = function(node){
    if(node.previous !== null){
        console.log(node.value)
        this.traverseFromTail(node.previous)
    }else{
        console.log(node.value)
    }
}


//双向链表从头插入
DoublyList.prototype.insertFromHead = function(position,value){
    var node = this.head
    var insertNode = new Node(value)
    var _position = 0
    if(position !== this.length - 1){
        while(_position < position){
            node = node.next
            _position++
        }
        currentNode = node//要插入的节点
        nextNode = node.next//要插入节点的下一个节点
    
        currentNode.next = insertNode//当前节点的next指针指向插入节点
        insertNode.previous = currentNode//插入节点的指针指向当前节点
        insertNode.next = nextNode//插入节点的next指针指向当前节点的下一个节点
        nextNode.previous = insertNode//下一个节点的previous指向插入节点
    }else{
        currentNode = this.tail
        currentNode.next = insertNode
        insertNode.previous = currentNode
        this.tail = insertNode
    }
    this.length++
}

//双向链表查找元素所在的位置
DoublyList.prototype.searchNodeAt = function(value,node){
    if(node !== null){
        if(value === node.value){
            return 
        }else{
            this.current++
            this.searchNodeAt(value,node.next)
        }
    }else{
        this.current = "链表中没有数据存在"
    }
    
}

//双向链表删除指定位置的元素
DoublyList.prototype.deleteNode = function(position){
    if(position === 0){
        var nextNode = this.head.next
        nextNode.previous = null
        this.head = nextNode
        this.length--
    }else if(position === this.length - 1){
        var lastNode = this.tail.previous
        lastNode.next = null
        this.tail = lastNode
        this.length--
    }else if(position > 0 && position < this.length - 1){
        var _position = 0
        var node = this.head
        var nextNode = null
        var previousNode = null
        while(_position < position){
            node = node.next
            _position++
        }
        previousNode = node.previous
        nextNode = node.next
        previousNode.next = nextNode
        nextNode.previous = previousNode
        node = null
    }
}

DoublyList.prototype.search = function(value){//将查找函数封装一下
    this.current = 0
    this.searchNodeAt(value,this.head)
}

var arr = [1,10,5,13,14,32,36,100,546,30,11,14]
var doublyList = new DoublyList()
arr.forEach((item)=>{
    doublyList.add(item)
})

//doublyList.traverseFromHead(doublyList.head)从头部开始遍历

//doublyList.traverseFromTail(doublyList.tail)从尾部开始遍历

//doublyList.search(99) //查找是否存在
//console.log(doublyList.current)

//插入节点
/*
doublyList.insertFromHead(11,99)
doublyList.traverseFromHead(doublyList.head)
console.log('~~~~~~~~~~~~~~~~~~~~~~')
doublyList.insertFromHead(0,99)
doublyList.traverseFromHead(doublyList.head)
*/

//删除指定节点
/*
doublyList.deleteNode(0)
doublyList.traverseFromHead(doublyList.head)
console.log('~~~~~~~~~~~~~~~~~~~~~~')
doublyList.deleteNode(2)
doublyList.traverseFromHead(doublyList.head)
*/





