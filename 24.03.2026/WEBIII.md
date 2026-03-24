# WEBIII



##### Aula 04.2: Middleware de autenticação



req -> requisição

res -> resposta



&#x09;    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

&#x09;   |		   |

cliente -> |    req/res    | -> Servidor

&#x20;          |\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_|

&#x09;       Middleware

&#x09; (fase de autenticação) -> Next()



*// Basicamente o middleware é o porteiro da aplicação, ele permite que o usuário possa fazer requisições ou respostas caso ele esteja logado, se caso ele não tiver vai ser barrado.*



*exemplo de token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YjlkYTMxOTM4ODMzZTJkMjRmMDg5OCIsImVtYWlsIjoiY2hzc2lsdmFAZ21haWwuY29tIiwiaWF0IjoxNzczODgzMTY4LCJleHAiOjE3NzQwNTU5Njh9.t\_9O\_uvDJ\_fQvq9PsFV1fNZ495xmGpcRaomzX6xjzbY"* 

