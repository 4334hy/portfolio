
   <!-- // モーダルの開放  -->

    $(document).ready(function() {
        $('#open_nav1').on('click', function() {
        $('#modal1').toggleClass('show');
        });
    });
    $(document).ready(function() {
        $('#open_nav2').on('click', function() {
        $('#modal2').toggleClass('show');
        });
    });

    $(document).ready(function() {
      $('#open_nav3').on('click', function() {
      $('#modal3').toggleClass('show');
      });
    });

    $(document).ready(function() {
      $('#open_nav4').on('click', function() {
      $('#modal4').toggleClass('show');
        });
    });

    <!--//  モーダルの閉鎖   -->

    $(document).ready(function() {
      $('.modalClose1').on('click', function() {
      $('#modal1').toggleClass('');
        });
    });

    $(document).ready(function() {
      $('.modalClose2').on('click', function() {
      $('#modal2').toggleClass('');
        });
    });


    $(document).ready(function() {
      $('.modalClose3').on('click', function() {
      $('#modal3').toggleClass('');
        });
    });

    $(document).ready(function() {
      $('.modalClose4').on('click', function() {
      $('#modal4').toggleClass('');
        });
    });

