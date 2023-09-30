import os
import time
from progress.spinner import Spinner

dependencies = ["progress"]

class Script():
    author="XtremeTHN"
    codename= "angelica"
    credits="XDA developers"

    def __init__(self, *args, **kwargs):
        ...

    def install(self):
        print("Connecting to device...")
        time.sleep(2)
        print("Rebooting to bootloader...")
        time.sleep(1)
        print("Waiting for device...")
        time.sleep(4)
        spin = Spinner("Flashing stock rom...")
        for x in range(10):
            time.sleep(1)
            spin.next()

        print("Rebooting...")
        print("Wait for the device to fully boot and then restart in Fastboot mode")
        print("Waiting for device...")
        time.sleep(2)
        print("Flashing recovery...")
        time.sleep(3)
        print("Rebooting to recovery...")
        time.sleep(3)
        print("You need to put the phone in adb sideload. It is in the recovery settings")
        print("Waiting for device...")
        time.sleep(1)
        print("Sending package...")
        time.sleep(3)
        print("Finished")
