import yaml

YAMLF = '/usr/tmp/test.yaml'
with open(YAMLF) as f:
    YAMLDATA=yaml.load(f)
