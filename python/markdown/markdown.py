import re

def parse(markdown):
    s = markdown
    s = re.sub(r'(.*)__(.*)__(.*)', r'\1<strong>\2</strong>\3', markdown)
    s = re.sub(r'(.*)_(.*)_(.*)', r'\1<em>\2</em>\3', s)
    s = re.sub(r'^\* (.*)', r'<li>\1</li>', s, flags=re.M)
    s = re.sub(r'(<li>.*</li>)', r'<ul>\1</ul>', s, flags=re.S)
    lines = s.split('\n')
    res = ''
    for line in lines:
        if header_match:= re.match('^(#+) (.*)', line, flags=re.M):
            line = f'<h{len(header_match.group(1))}>{header_match.group(2)}</h{len(header_match.group(1))}>'

        line = re.sub(r'^(?!<[hlu])(.*?$)', r'<p>\1</p>', line)
        res += line
        
    return res 
