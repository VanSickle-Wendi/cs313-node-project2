$(document).ready(function(){
    $("#expenseTypeList").on('submit', function(event){
        event.preventDefault();
        const expense_type_id =  $("#expenseType_id").val();
        //AJAX call for jquery
        $.get('/getExpense_Type?id=' + expense_type_id, { 
                            
                } , function(data){
                    $("#category").text(data.category);
            
                    //alert(data.category);
                
                   //alert(JSON.stringify(data));
                }, 'json'
        );
    });

    $("#getExpenseAll").on('click', function(){ //#getExpenseAll is the button id from expenseTypes.html
        const expense_type_id =  $("#expenseType_id").val(); //#expenseType_id is the input id from expenseTypes.html
        $.get('/getExpenseAll/' + expense_type_id, { //getExpenseAll/ is the endpoint from server.js. it has a placeholder :id, which is where + expense_type_id will go from the previous line.
                   
                } , function(data){
                    const expense_type = data;
                    for(var i=0; i<expense_type.length; i++){
                        var expense_type_id = expense_type[i].full_display;
                        $.get('/getExpense_Type?id=' + expense_type_id, { 
                   
                                } , function(data){ //#category1 is the empty div where this data will go
                                    $("#category1").append("<tr><td>" + data.category + "</td></tr>");
                                    //alert(data.category);
                                   //alert(JSON.stringify(data));
                                }, 'json'
                        );                                                                   
                        //alert(JSON.stringify(parents[i]));
                    }                    
                    //$("#parents").html(JSON.stringify(data));
                }, 'json'
            );
    });
});


