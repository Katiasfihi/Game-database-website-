
@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ) : Observable<HttpEvent<any>> {
        req = req.clone ({
            setHeaders : {
                'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
              },
        })
    }
}