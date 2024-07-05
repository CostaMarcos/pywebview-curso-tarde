import webview

class Curso:
    HOME = "./web/index.html"

    def __init__(self) -> None:
        self.window = None

    def start(self, args):
        self.window = webview.create_window(
            "Curso Pywebview", 
            self.HOME
        )

        self.window.expose()
        webview.start(http_server=True, gui="qt", debug=True)

if __name__== "__main__":
    import sys
    sys.exit(Curso().start(sys.argv))