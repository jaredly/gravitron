//
//  Shader.fsh
//  TestGame
//
//  Created by Benjamin San Soucie on 1/26/17.
//  Copyright © 2017 personal. All rights reserved.
//

varying lowp vec4 colorVarying;

void main()
{
    gl_FragColor = colorVarying;
}
