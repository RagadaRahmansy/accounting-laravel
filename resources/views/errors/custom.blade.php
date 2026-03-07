<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error - Raga</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .error-card {
            background: white;
            border-radius: 20px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            padding: 3rem;
            max-width: 500px;
            text-align: center;
        }
        .error-icon {
            font-size: 5rem;
            color: #dc3545;
            margin-bottom: 1rem;
        }
        .error-code {
            font-size: 6rem;
            font-weight: bold;
            color: #667eea;
            line-height: 1;
            margin-bottom: 1rem;
        }
        .btn-home {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            padding: 12px 30px;
            font-weight: 600;
        }
        .btn-home:hover {
            opacity: 0.9;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="error-card">
                    <div class="error-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="error-code">
                        {{ $code ?? '500' }}
                    </div>
                    <h3 class="mb-3">Oops! Terjadi Kesalahan</h3>
                    <p class="text-muted mb-4">
                        {{ $message ?? 'Mohon maaf, terjadi kesalahan pada sistem. Tim kami akan segera memperbaiki masalah ini.' }}
                    </p>
                    <div class="d-flex gap-3 justify-content-center">
                        <a href="{{ url('/') }}" class="btn btn-primary btn-home text-white">
                            <i class="fas fa-home me-2"></i>Kembali ke Home
                        </a>
                        <a href="javascript:history.back()" class="btn btn-outline-secondary">
                            <i class="fas fa-arrow-left me-2"></i>Kembali
                        </a>
                    </div>

                    @if(config('app.env') === 'production')
                    <hr class="my-4">
                    <div class="text-muted small">
                        <p class="mb-1">Error ID: {{ time() }}</p>
                        <p class="mb-0">Silakan hubungi administrator jika masalah berlanjut</p>
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</body>
</html>
