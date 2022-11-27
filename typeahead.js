<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js">
</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-3-typeahead/4.0.1/bootstrap3-typeahead.min.js">
    </script>
<script type="text/javascript">

    var route = "{{route('autoCompleteProductsSearch')}}";
    $('#search').typeahead({
        source: function(query, process) {
            return $.get(route, {
                query: query
            }, function(data) {
              var states = data;
          console.log(states.project_name);
          var arr= new Array();
    $.each( states, function(i, obj) {
              arr.push( obj.project_name )
    });
                
                return process(arr);
                
            });
        }
    });
</script>