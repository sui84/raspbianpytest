import re
'''
http://www.cnblogs.com/deerchao/archive/2006/08/24/zhengzhe30fengzhongjiaocheng.html
\d 数字
\w 字母数字和下划线
\t 制表符
. 除了回车以外的所有字符
+ >=1
* >=0
? 0 or 1
~ 字符串开始位置
$ 字符串结束位置
{m} m次
{m,n} between m and n
.?的意思是尽可能少的匹配
.*具有贪婪的性质，首先匹配到不能匹配为止，根据后面的正则表达式，会进行回溯。
.*？则相反，一个匹配以后，就往下进行，所以不会进行回溯，具有最小匹配的性质。

'''


class RegHelper(object):
    def __init__(self):
        numcom = re.compile('\d+')

    def UrlSearch(self,url):
        # search one : searched = re.search(http_search_re, body, re.IGNORECASE)
        httpre = '((search|query|&q|\?q|search\?p|searchterm|keywords|keyword|command|terms|keys|question|kwd|searchPhrase|Carrier|device_id)=([^&][^&]*))'
        rec=re.compile(httpre, re.IGNORECASE)
        searched = rec.findall(url)
        msgs=[]
        if searched <> None:
            for search in searched:
                msgs.append(search[0].decode('utf-8'))
        return '\n'.join(msgs)

    def NumMatch(self,str):
        result = re.search('\d+',str)
        if result:
            print result.group()
        else:
            print 'nothing'
        return result.group()

    def GetAllNumMatch(self,str):
        result = re.findall('\d+',str)
        if result:
            print result
        else:
            print 'nothing'
        return result

    def GetAllMatch(self,str,regstr):
        # regstr = 'aaaa(.*?)bbbb'
        pattern=re.compile(regstr)
        items=re.findall(pattern,str)
        return items
