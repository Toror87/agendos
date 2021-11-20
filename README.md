# agendos

Para el backend, con pipenv instalar los requerimientos.
Pararse en carpeta backend, correr los siguientes comandos:
1. pipenv shell
2. pipenv install
// instalará django, djangorestframework, drf-yasg, django-phonenumber-field
el campo phone requiere formato internacional de telefono, ejemplo, +549341256498, es nullable

3. python manage.py makemigrations
4. python manage.py migrate
5. python manage.py runserver

Para el frontend, se instalo lo que es react.

Antes de iniciar el servidor ubicarse en la carpeta frontend
comando para iniciar el servidor react: npm start
