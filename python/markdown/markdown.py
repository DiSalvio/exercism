import re

def parse(markdown):
    last_line_li = False
    lines = markdown.split('\n')
    res = ''
    for i, line in enumerate(lines):
        header_match = re.match('(#+) (.*)', line)
        if header_match:
            line = f'<h{len(header_match.group(1))}>{header_match.group(2)}</h{len(header_match.group(1))}>'
        bold_match = re.match('(.*)__(.*)__(.*)', line)
        if bold_match:
            line = f'{bold_match.group(1)}<strong>{bold_match.group(2)}</strong>{bold_match.group(3)}'
        italic_match = re.match('(.*)_(.*)_(.*)', line)
        if italic_match:
            line = f'{italic_match.group(1)}<em>{italic_match.group(2)}</em>{italic_match.group(3)}'

        li_match = re.match(r'\* (.*)', line)

        if not li_match and not header_match:
            line = '<p>' + line + '</p>'

        if li_match:
            if last_line_li:
                line = f'<li>{li_match.group(1)}</li>'
            else:
                line = f'<ul><li>{li_match.group(1)}</li>'
            last_line_li = True

        if len(lines) == i+1:
            if li_match:
                line += '</ul>'
            elif last_line_li:
                line = '</ul>' + line
                last_line_li = False

        res += line
    return res
