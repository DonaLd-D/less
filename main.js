let main=document.querySelector('.main')

let str=`<section class="block1">
<h3>less</h3>
<h5>是什么</h5>
预处理技术，css的拓展<br>
<h5>有什么用</h5>
提高书写css的效率<br>
语法更加方便<br>
后期的维护更加简单<br>
</section>
<section class="block2">
<h5>怎么用</h5>
<p>学习专门的语法</p> 
<p>变量</p>
@变量名 : 值; @color-f90 : #f90; div { color : @color-f90 } <br>
<p>嵌套</p>
选择器 {<br>
选择器 {<br>
<br>
} <br>
} <br>
最终会帮我们翻译(编译)成css <br>
选择器 选择器 {}br
<p>混合</p>
.类名 { 一堆可以重复使用的代码 } <br>
选择器 { .类名(); } <br>
</section>
<br>
<section class="block3">
<div>
  <div>
    <p>.类名(@w,@h)</p>
    width: @w; <br>
    height :@h; <br>
    } <br>
  </div>
  <div>
    <p>.类名(具体的宽度,具体的高度);</p>
    <p>运算</p>
    因为css3里面其实已经支持了运算了，所以less里面的运算使用的不多了 <br>
    width: 1px + 1px;<br>
    注意：单位 <br>
  </div>
  <div>
    <p>导入</p>
    @import 'less或者css的路径'; <br>
    更加推荐导入less，减少了服务器的压力 <br>
  </div>
</div>
</section>`

let n=1

main.innerHTML=str.substring(0,n)

setInterval(()=>{
  if(n>str.length){
    return
  }
  n+=1
  main.innerHTML=str.substring(0,n)

},10)
