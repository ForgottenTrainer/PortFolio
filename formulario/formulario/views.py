from django.shortcuts import render

def send_email(email):
    pass

def index(request):
    if request.method == 'POST':
        mail = request.POST.get('mail')
        send_email(mail)

    return render(request, 'index.html', {})