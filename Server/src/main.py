import fastapi


app = fastapi.FastAPI()

@app.get('/')
def root():
    return {'message': 'Hello World!'}

@app.get("/scripts/{vendor}/{device}/{script}")
def get_script(vendor: str, device: str, script: str):
    return {'vendor': vendor, 'device': device, 'script': script}
