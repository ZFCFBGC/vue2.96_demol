<template>
  <div class="index">
    <div class="head">demol页面</div>
    <!-- <Button @onClick="goPath">国企更1</Button> -->
    <div class="tab" ref="tab">
      <div
        class="tan_one"
        v-for="(item, index) in arr"
        @click="goScroll(index)"
        :key="index"
        ref="tab_w"
      >
        {{ item }}
      </div>
    </div>
    <div class="fenye">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[40, 60, 80, 100]"
        :page-size="40"
        layout="total, sizes, prev, pager, next, slot"
        :total="400">
        <div class="shuru"><el-input v-model="currentPage1" placeholder="请输入内容" class="pageInput" size="small"></el-input></div>
        <div class="button" @click="goPage">确定</div>
      </el-pagination>
    </div>
    <div class="tree">
      <el-tree :data="tree_data" :props="defaultProps" @node-click="handleNodeClick">
        <span class="custom-tree-node" slot-scope="{ node, data }">
            <i :class="data.icon"></i>
            {{ node.label }}          
        </span>
      </el-tree>
    </div>
    <div class="table">
       <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            type="index"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="120"
            :sortable="true" 
            >
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="num"
            label="数量"
            :sortable="true"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
           <el-table-column label="操作">
            <template slot-scope="scope">
              <el-dropdown>
              <span class="el-dropdown-link">
                操作<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>
<script>

export default {
  components: {
  },
  data(){
    return {
      gqg:'',
      arr:['过去','看来','说的话','国企更','风尚大典','都是几个','的撒娇'],
      status:false,
      left:null,
      currentPage: 1,
      currentPage1:1,
      listShow:false,
      tree_data: [{
          label: '一级 1',
          icon:'el-icon-success',
          // children: [{
          //   label: '二级 1-1',
          //   children: [{
          //     label: '三级 1-1-1'
          //   }]
          // }]
        }, {
          label: '一级 2',
          icon:'el-icon-success',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
         tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          num:3,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          num:2,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          num:7,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          num:2,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          num:5,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          num:9,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          num:1,
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
    }
  },
  watch: {
    left: function (val) {
      console.log('--------',val)
    }
  },
  mounted() {
    console.log('tools',tools.checkID('360313199105174016'))
  },
  methods:{
    goPath(e){
      console.log('事件触发')
      console.log('接收父组件传递过来的参数',e)
    },
    goScroll(idx){
      var scrollw = this.$refs.tab.scrollWidth; //滚动条宽度
      this.left = this.$refs.tab.scrollLeft;//滚动条距左边的距离
      var w = document.documentElement.clientWidth
      if(this.left==(scrollw-w)){
        this.status = true
      }else if(this.left==0){
        this.status = false
      }
      var Domw = this.$refs.tab_w[0].offsetWidth;//元素的宽度
      //先判断能显示几个
      var num = Math.floor(w/Domw)
      
      if(!this.status){
        if(idx>=num-1&&idx<=this.arr.length-num){
          this.$refs.tab.scrollLeft = Domw*(idx)
        }else if(idx==this.arr.length-num){
          this.$refs.tab.scrollLeft = scrollw-w
        }else if(idx>this.arr.length-num||idx<num-1){
          console.log('不移动左')
        }
      }else{
        console.log('jinlai')
        if(idx>=num-1&&idx<=this.arr.length-num){
           this.$refs.tab.scrollLeft = (scrollw-w)-(this.arr.length-(idx+1))*Domw
        }else if(idx==this.arr.length-num){
          this.$refs.tab.scrollLeft = scrollw-w
        }else if(idx>this.arr.length-num||idx<num-1){
          console.log('不移动右')
        }
      }
    },
    handleSizeChange(val) {
      console.log('222222',val);
    },
    handleCurrentChange(val) {
      console.log('-------',val,this.currentPage);
      this.currentPage1 = val
    },
    goPage(val){
      console.log('11111',val)
      this.currentPage = this.currentPage1*1
    },
    handleNodeClick(data) {
      console.log(data);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log('数组',this.multipleSelection)
    },
    mouseOver(idx,row){
      console.log('进入',idx,row)
      var list = this.$refs.list
      //list.style.display = "block"
      console.log('1111',list)
    },
    mouseLeave(idx,row){
      console.log('离开',idx,row)
      var list = this.$refs.list
      //list.style.display = "none"
      console.log('1111',list)
    }
  }
}
</script>
<style lang="less" scoped>
.index {
  .head {
    font-size: 32px;
  }
}
.tab {
  height: 40px;
  background: #f40;
  width: 100%;
  overflow-x: auto; /*添加横向滚动条*/
  white-space: nowrap; /*不换行*/
  -ms-overflow-style: none; //ie隐藏滚动条
  .tan_one {
    width: 100px;
    height: 40px;
    color: #fff;
    line-height: 40px;
    display: inline-block;
    text-align: center;
  }
}
.tab::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.fenye{
  margin-top:100px;
  width:100%;
}
.pageInput{
  width:40px;
  height:20px;
  
}
.tree{
  margin:100px;
  width:100%;
}
.shuru{
  display: inline-block;
}
.button{
  display:inline-block;
  line-height: 30px;
  width:40px;
  height:30px;
  border:1px solid #dedede;
  border-radius: 10px;
  text-align:center;
}
.more{
  width:60px;
  height:36px;
  text-align:center;
  color:#f40;
  line-height:36px;
  position:relative;
  .list{
    //display: none;
    position:absolute;
    left:0;
    top:0;
    z-index:99999999999999;
    background:red;
    height:200px;
    width:60px;
  }
}
</style>
<style lang="less">
  .el-input--small{
    .el-input__inner{
      height:20px !important;
    }
  }
  .tree .el-tree-node__expand-icon.expanded {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  .tree .el-icon-caret-right:before {
    content: "\e723";
    font-size: 18px;
  }
  .tree .el-tree-node__expand-icon.expanded.el-icon-caret-right:before {
     content: "\e722";
     font-size: 18px;
  }
</style>
