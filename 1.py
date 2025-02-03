import zipfile

# ZIPファイルの作成
with zipfile.ZipFile('example_cp437.zip', 'w') as zipf:
    # ファイル名をcp437でエンコード
    filename = 'a.txt'.encode('cp437', errors='replace').decode('cp437')
    # ZIPファイルにファイルを追加
    zipf.writestr(filename, 'これはテストファイルの内容です。')

import chardet, os
file = 'example_cp437.zip'
with zipfile.ZipFile(file) as z: 

    for info in z.infolist(): 

        info.filename = info.orig_filename 

        inf = chardet.detect(info.orig_filename)

        print(inf['encoding'])
