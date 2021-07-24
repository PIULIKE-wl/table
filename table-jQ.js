
    //删除操作
    $('#tb').on('click','a',function(){
        $(this).parent().parent().remove();

        $('#tb tr:odd td').css('backgroundColor','white');
        $('#tb tr:even td').css('backgroundColor','blanchedalmond');
    })

    //添加操作
    $('.push button').click(function(){
        $('.black').css('display','block');
        $('.push-window').css('display','block');
    })

    $('#sure').click(function(){
        var bookName=$('#bookName').val();
        var ph=$('#ph').val();
        var price=$('#price').val();
        var push= $('<tr>'+
                    '<td name="bn">'+bookName+'</td>'+
                    '<td>'+ph+'</td>'+
                    '<td>'+price+'</td>'+
                    '<td><a href="#">删除</a></td>'+
                '</tr>');
        $('#tb').append(push);
        $('.black').css('display','none');
        $('.push-window').css('display','none');
        //清空输入框中的值，为下次输入做准备
        $('#bookName').val("");
        $('#ph').val("");
        $('#price').val("");

        $('#tb tr:odd td').css('backgroundColor','white');
    })

    $('#cancel').click(function(){
        $('.black').css('display','none');
        $('.push-window').css('display','none');
        $('#bookName').val("");
        $('#ph').val("");
        $('#price').val("");
    })

    //搜索模块
    $('.search button').click(function(){
        var text=$('#st').val();
        var bns=$("td[name='bn']");
        var flag=0;
        for(let i=0;i<bns.length;i++)
        {
            
            if(bns[i].innerHTML==text)
            {
                $(bns[i]).css('backgroundColor','red');
                flag=1;
            }
            else
            {
                $(bns[i]).css('backgroundColor','blanchedalmond');
            }
        }
        if(flag==0)
        {
            alert('未查询到结果');
        }
    })

    //隔行变色
    $('#tb tr:odd td').css('backgroundColor','white');
    $('#tb tr:even td').css('backgroundColor','blanchedalmond');
