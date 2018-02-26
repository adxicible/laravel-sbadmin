
@extends('layout')

@section('contents')
<body class="bg-dark">
    <div class="container" style="margin-top:10%">
        <div class="card card-login mx-auto mt-5">
            <div class="card-header">Login</div>
            <div class="card-body">
                <form method="post">
                    {{ csrf_field() }}

                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input class="form-control {{ $errors->isEmpty()?:'is-invalid' }}" id="email" name="email" type="email" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input class="form-control {{ $errors->isEmpty()?:'is-invalid' }}" id="password" name="password" type="password" placeholder="Password">
                  </div>
                  <button class="btn btn-primary btn-block" type="submit">Login</button>

                  @if(!$errors->isEmpty())
                  <span class="text text-danger center">{{ $errors->first() }}</span>
                  @endif
                </form>
            </div>
        </div>
    </div>

  <!-- Bootstrap core JavaScript-->
  <script src="/js/app.js"></script>
  <script src="/js/bootstrap.min.js"></script>
  <script src="/js/sb-admin.js"></script>
</body>
@stop
