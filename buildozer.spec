[app]

# (str) Title of your application
title = Max Transfert

# (str) Package name
package.name = maxtransfert

# (str) Package domain (needed for android/ios packaging)
package.domain = org.maxtransfert

# (str) Source code where the main.py live
source.dir = .

# (list) Source files to include (let empty to include all the files)
source.include_exts = py,png,jpg,kv,atlas

# (str) Application versioning (method 1)
version = 1.0.0

# (list) Application requirements
# comma separated e.g. requirements = sqlite3,kivy
requirements = python3,kivy,requests,android,certifi

# (str) Custom source folders for requirements
# fill this lines if you want to use custom program locations
# e.g. python3.7 = /usr/bin/python3.7

# (list) Garden requirements
#garden_requirements =

# (str) Presplash of the application
#presplash.filename = %(source.dir)s/data/presplash.png

# (str) Icon of the application
#icon.filename = %(source.dir)s/data/icon.png

# (str) Supported orientations
# Valid options are: landscape, portrait, all
orientation = landscape

# (list) Permissions
# For Android 13+ (API 33), generic storage permissions are often ignored.
# We include them for backward compatibility and add media-specific ones.
android.permissions = INTERNET, WRITE_EXTERNAL_STORAGE, READ_EXTERNAL_STORAGE, MANAGE_EXTERNAL_STORAGE, READ_MEDIA_VIDEO, READ_MEDIA_IMAGES, READ_MEDIA_AUDIO

# (int) Target Android API, should be as high as possible.
# 33 is the minimum for Play Store in 2024/2025.
android.api = 33

# (int) Minimum API your APK will support.
android.minapi = 21

# (int) Android SDK version to use
#android.sdk = 33

# (str) Android NDK version to use
#android.ndk = 25b

# (list) Android architectures to build for
android.archs = armeabi-v7a, arm64-v8a

# (bool) Allow backup
android.allow_backup = True

# (str) The Android logcat filters to use
#android.logcat_filters = *:S python:D

# (str) Android entry point, default is ok for Kivy
#android.entrypoint = org.kivy.android.PythonActivity

# (list) List of Java .jar files to add to the libs so that pyjnius can access
# their classes. Don't add kivy-android.jar or python-android.jar, they are
# already added.
#android.add_jars = foo.jar,bar.jar,path/to/baz.jar

# (list) List of Java files to add to the android project (can be java or a
# directory containing the files)
#android.add_src =

# (list) Android AAR archives to add
#android.add_aars =

# (list) Gradle dependencies
#android.gradle_dependencies =

# (bool) Enable AndroidX support
android.enable_androidx = True

# (str) Android logcat filters to use
#android.logcat_filters = *:S python:D

# (bool) Copy library instead of making a lib dir. This is needed for
# some architectures or Android versions.
#android.copy_libs = 1

# (str) The name of the build profile to use
#p4a.profile = 

# (list) The p4a hooks to use
#p4a.hook = 

# (str) The p4a branch to use
#p4a.branch = master

# (str) The p4a directory to use
#p4a.dir =

# (list) The p4a extra_args to use
#p4a.extra_args =

# (bool) If True, then skip trying to update the python-for-android
# directory each time.
#p4a.skip_update = False

# (str) The p4a bootstrap to use
#p4a.bootstrap = sdl2

# (int) port number to specify an explicit port to use to run the
# app on your device (eg for live coding)
#p4a.port =

#
# iOS specific
#

# (str) Path to a custom kivy-ios folder
#ios.kivy_ios_dir = ../kivy-ios
# (str) Path to a custom xcode project template
#ios.xcode_template =

# (str) Python version to use
#ios.python_ver = 3

# (str) The name of the build profile to use
#ios.profile = 

# (list) iOS codesign to use
#ios.codesign.allowed =
#ios.codesign.debug =
#ios.codesign.development =
#ios.codesign.release =

# (str) The name of the build profile to use
#ios.profile = 

[buildozer]

# (int) Log level (0 = error only, 1 = info, 2 = debug (with command output))
log_level = 2

# (int) Display warning if buildozer is run as root (0 = off, 1 = on)
warn_on_root = 1

# (str) Path to build artifact storage, default is .buildozer
#build_dir = ./.buildozer

# (str) Path to build output (APK, AAB, etc)
#bin_dir = ./bin
