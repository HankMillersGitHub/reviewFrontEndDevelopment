/*
* aa document.getElementById('li').parentNode 获取目标元素的父元素
*
*
* */
function commonParentNode(oNode1, oNode2) {
    // 输入两个节点  调用parentNode 获取父节点
    let parent1 = oNode1.parentNode;
    let parent2 = oNode2.parentNode;
    if(parent1 === parent2){
        return parent1
    }else{
        commonParentNode(oNode1, oNode2)
    }
}
// arr.split(' ') 把数组按照参数分割为字符串数组
// Object.assign(target,target1,target2) 将target1，target2的可枚举属性复制到target中  浅拷贝
function namespace(oNamespace, sPackage) {
    let b = oNamespace;
     sPackage.split('.').forEach(item=>{
      b = b[item] = Object.assign({},b[item]);
  });
    return oNamespace
}