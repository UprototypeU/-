<template>
    <div class="fillcontain">
        <div class="firmApprove">
            <el-steps :active="active" finish-status="success">
                <el-step title="认证企业身份">
                    asdsadasdasdas
                </el-step>
                <el-step title="申请电子签章">
111111111111111111111
                </el-step>
                <el-step title="录入信息成功">
2222222222222222222222222222
                </el-step>
            </el-steps>

            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               active: 0               
            }
        },
    	components: {
    	},
        created(){
        
        },
        mounted(){
            
        },
        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        },
        watch:{
            
        }
    }
</script>

<style lang="less">
	@import '../../style/mixin';
    .firmApprove{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #fff;
    }
</style>
