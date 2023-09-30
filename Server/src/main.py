import fastapi
import pathlib
import os

app = fastapi.FastAPI()
SCRIPTS_DIR = os.path.join("..", "scripts")

@app.get('/')
def root():
    return {'message': 'Hello World!'}

@app.get("/scripts/{vendor}/{device}/{script}")
def get_script(vendor: str, device: str, script: str):
    specific_script_dir = pathlib.Path(os.path.join(SCRIPTS_DIR, vendor, device, script))
    print(specific_script_dir.exists())
    if specific_script_dir.exists():
        return fastapi.responses.FileResponse(specific_script_dir)
    else:
        return {
            "code": 404,
            "error": "Script not found"
        }